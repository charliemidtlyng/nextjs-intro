import React from 'react'
import Head from '../components/head';
import EventSummary from '../components/eventSummary';
import Layout from '../components/layout';
export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = { activities: [] }
  }

  static async getInitialProps ({ pathname, query }) {
    return {
      pathname,
      query,
      queryString: Object.keys(query).join('')
    }
  }

  async componentDidMount () {
    const response = await fetch(`/fotballapi/events`)
    const allActivities = await response.json();
    const activities = allActivities.filter(a => a.id > 8200);
    this.setState({ activities });
  }

  render () {
    const {activities}  = this.state;
    return (
      <Layout>
        <Head description={'Bekk fotballs påmeldingsside'}/> 
        {!activities ? <pre>Henter treninger og kamper</pre> : null}
        <div>{activities.map ? activities.map(activity => <EventSummary key={activity.id} event={activity} />) : null}</div>
      </Layout>
    )
  }
}
