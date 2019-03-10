import React from 'react'
import Head from '../components/head';
import EventDetails from '../components/eventDetails';
import Layout from '../components/layout';
import Spinner from '../components/spinner';
import fetch from 'isomorphic-unfetch'

export default class extends React.Component {

  static async getInitialProps ({ req, pathname, query, asPath }) {
    const baseUrl = req ? `${req.protocol}://${req.headers.host}` : '';
    const response = await fetch(`${baseUrl}/fotballapi/events/${query.id}`)
    const details = await response.json();

    return {
      details,
      pathname,
      query,
      asPath,
      queryString: Object.keys(query).join('')
    }
  }

  render () {
    const { asPath, details } = this.props;
    return (
      <Layout>
        <Head title={details ? details.subject : ''} url={asPath}/> 
        <div>{ details ? <EventDetails event={details} /> : <Spinner /> }</div>
      </Layout>
    )
  }
}
