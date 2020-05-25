import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import {
  SideNavigation,
  NavigationHeader,
  Header,
  NestableNavigationContent,
  ButtonItem,
  NestingItem,
  Footer,
  NavigationFooter,
} from '@atlaskit/side-navigation';

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}

      </nav>
    </header>
    <SideNavigation label="project">
      <NavigationHeader>
        <Header>NXTGen Industries</Header>
      </NavigationHeader>
      <NestableNavigationContent>
        <ButtonItem>Your work</ButtonItem>
        <NestingItem id="filters" title="Filters">
          <ButtonItem>Search issues</ButtonItem>
        </NestingItem>
      </NestableNavigationContent>
      <NavigationFooter>
        <Footer>You're in a next-gen project</Footer>
      </NavigationFooter>
    </SideNavigation>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
