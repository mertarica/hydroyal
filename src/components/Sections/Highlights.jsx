import React from 'react';
import styled from 'styled-components';
import { Chrono } from 'react-chrono';

const Wrapper = styled.section`
  width: 100%;
  background: linear-gradient(#fff, #c9f89d, #fff);
  section {
    padding: 0;
  }

  #highlights {
    display: flex;
    background-color: #031625;

    &:hover {
      .tl-item {
        width: 23.3333%;
      }
    }
  }
`;

const HeaderInfo = styled.div`
  > h1 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 2rem;
    text-align: center;
  }
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  white-space: break-spaces;
  > div > div > div {
    width: 100%;
  }
  .active {
    h1 {
      color: #ff5a6e;
    }
  }
  h1 {
    color: #024129;
  }
  h1,
  h2 {
    text-align: center;
  }
  section {
    border-bottom: none;
    min-height: 100px;
  }
  .timeline-horz-card-wrapper {
    outline: none;
  }
  .right {
    min-width: 75px;
  }
  .market-link {
    text-decoration: underline !important;
    color: #ff5a6e;
  }
`;

const items = [
  {
    title: 'January, 2024',
    cardTitle: "Hydroyal's MEAs are on sale!",
    cardSubtitle: (
      <div>
        Hydroyal's MEAs are available on{' '}
        <a
          className="market-link"
          target="_blank"
          rel="noreferrer"
          href="https://www.fuelcellstore.com/product/product&product_id=2043"
        >
          Fuel Cell Store
        </a>
      </div>
    ),
  },
  {
    title: 'November, 2023',
    cardTitle: 'KTH Pre-Incubator program was completed',
    cardSubtitle: 'Hydroyal pitched in Demo Day of KTH Innovation Pre-Incubator',
  },
  {
    title: 'November, 2023',
    cardTitle: 'Grant',
    cardSubtitle:
      'Hydroyal has received a grant from Vinnova for Innovative Impact Startups \nwith the project "Super Efficient and Scalable Membrane Electrode Assemblies"',
  },
  {
    title: 'January, 2023',
    cardTitle: 'Officially Starting',
    cardSubtitle: 'Our company was established as Hydroyal.',
  },
  {
    title: 'October, 2022',
    cardTitle: 'Pre-Incubator Program',
    cardSubtitle: 'Accepted to KTH Innovation Pre-incubator program',
  },
  {
    title: 'October, 2022',
    cardTitle: 'First Test Drive',
    cardSubtitle: 'Accepted to STING Testdrive Deeptech 2022',
  },
];

export default function Highlights() {
  return (
    <Wrapper id="highlights">
      <HeaderInfo>
        <h1>Hylights</h1>
      </HeaderInfo>
      <div className="container">
        <CardContainer>
          <Chrono
            items={items}
            mode="VERTICAL"
            showAllCardsHorizontal
            itemWidth="2000"
            hideControls
            theme={{
              primary: '#024129',
              secondary: 'transparent',
              cardBgColor: 'transparent',
              titleColor: '#024129',
              titleColorActive: '#ff5a6e',
            }}
          />
        </CardContainer>
      </div>
    </Wrapper>
  );
}
