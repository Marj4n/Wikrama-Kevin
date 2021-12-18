import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
  a:hover {
    text-decoration: underline;
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Author</h1>
          <PText>Kevin Yardan Fauzan</PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Sejarah',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'Matrikulasi',
                path: '/matrikulasi',
              },
              {
                type: 'Link',
                title: 'Kantin',
                path: '/kantin',
              },
              {
                type: 'Link',
                title: 'Perpustakaan',
                path: '/perpustakaan',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+6282310548291',
                path: 'tel:+6282310548291',
              },
              {
                title: 'nivkaiser@gmail.com',
                path: 'mailto:nivkaiser@gmail.com',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Github',
                path: 'https://github.com/Nivth',
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com/Nivth22',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/__kevnnn_/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2021 - Kevin | All Right Reserved</PText>
        </div>
      </div>
    </FooterStyle>
  );
}
