import React from 'react'
import Head from '../components/head';
import EventSummary from '../components/eventSummary';
import Layout from '../components/layout';
import Spinner from '../components/spinner';
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
    const activities = allActivities.filter(a => a.startTime > 1546549200000);
    this.setState({ activities });
  }

  render () {
    const {activities}  = this.state;
    return (
      <Layout>
        <Head description={'Bekk fotballs påmeldingsside'}/> 
        <div>{activities.length > 0 ? activities.sort((a, b) => a.startTime-b.startTime).map(activity => <EventSummary key={activity.id} event={activity} />) : <Spinner />}</div>
      </Layout>
    )
  }
}
