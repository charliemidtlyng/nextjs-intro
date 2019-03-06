import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>Heia fotball</a>
        </Link>
      </li>
      <ul>
          <li>
            <Link href="https://bekk.no">
              <a>Bekk -></a>
            </Link>
          </li>
      </ul>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
        background-color: #1a1a1a;
        color: #fff;
      }
      nav {
        text-align: center;
        background-color: #1a1a1a;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
        margin: 0;
      }
      li {
        margin: 0;
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #fd5058;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
)

export default Nav
