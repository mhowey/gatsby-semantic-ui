import React from 'react'

import { Button } from 'semantic-ui-react'
import Layout from '../components/layout'
import { navigate } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <h2>Semantic UI Gatsby Starter</h2>

    <p>This is a slightly customized version of gatsby-starter-semantic-ui.</p>

    <p>
      Everything is pre-setup and ready to go. You can either use the default
      Semantic UI theme as it currently runs, or you can override all variables
      and make custom CSS changes in the <code>src/semantic/site</code> folder.
    </p>

    <p>
      The folder contains all the standard settings of the default theme so you
      don't have to remember which variables are available.
    </p>

    <Button primary positive onClick={() => navigate('/app')}>
      Go to the main Application
    </Button>
  </Layout>
)

export default IndexPage
