import React from 'react'
import Head from '../components/head';
import EventSummary from '../components/eventSummary';
import Layout from '../components/layout';
import Spinner from '../components/spinner';
import fetch from 'isomorphic-unfetch'

export default class extends React.Component {

  static async getInitialProps ({ req, pathname, query }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const response = await fetch(`${baseUrl}/fotballapi/events`)
    const allActivities = await response.json();
    const activities = allActivities
      .filter(a => a.startTime > 1546549200000)
      .sort((a, b) => a.startTime-b.startTime);


    return {
      activities,
      pathname,
      query,
      queryString: Object.keys(query).join('')
    }
  }

  async componentDidMount () {
    
  }

  render () {
    const {activities}  = this.props;
    const activityComponents =  activities    
        .map(activity => <EventSummary key={activity.id} event={activity} />)
    return (
      <Layout>
        <Head description={'Bekk fotballs påmeldingsside'}/> 
        <div>{activities.length > 0 ? activityComponents : <Spinner />}</div>
      </Layout>
    )
  }
}
