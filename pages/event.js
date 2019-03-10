import React from 'react'
import Head from '../components/head';
import EventDetails from '../components/eventDetails';
import Layout from '../components/layout';
import Spinner from '../components/spinner';
export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
  }

  static async getInitialProps ({ pathname, query, asPath }) {
    return {
      pathname,
      query,
      asPath,
      queryString: Object.keys(query).join('')
    }
  }

  async componentDidMount () {
    const {id} = this.props.query;
    const response = await fetch(`/fotballapi/events/${id}`)
    let data = await response.json();
    this.setState({ details: data })
  }

  render () {
    const { details } = this.state;
    const { asPath } = this.props;
    return (
      <Layout>
        <Head title={details ? details.subject : ''} url={asPath}/> 
        {!details ? <Spinner /> : null}
        <div>{details ? <EventDetails event={details} />: null}</div>
      </Layout>
    )
  }
}
