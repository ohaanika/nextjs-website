import Link from 'next/link'
import Image from 'next/image'
import PlaceholderImage from '../components/placeholders/placeholderImage'
import Section from '../components/section/section'
import SectionHeading from '../components/section/sectionHeading'
import SectionContent from '../components/section/sectionContent'

const TeamCardInfo = [
  {
    name: 'Matthew Chan',
    role: 'CEO',
    bio: [
      'Formerly a Solutions Engineer at Plotly, Matthew spent 2 years developing Dash applications and consulting to Fortune 500’s in industries ranging from Oil and Gas to Finance to Tech. While at the company, he led 5-figure workshops to high-value clients across the U.S. and Germany. Matthew also contributed to Plotly’s Dash Bio and Dash Enterprise.',
      'He is currently wrapping up his BASc. in Electrical Engineering at The University of British Columbia.',
    ],
    icons: {
      email: 'mailto:matthew@zyphr.ca',
      github: 'https://github.com/mtwichan',
      linkedin: 'https://www.linkedin.com/in/matthewichan/',
    },
    img: '/images/team/matt.jpg',
  },
  {
    name: 'Adam Kulidjian',
    role: 'CTO',
    bio: [
      "As Plotly's former lead and #2 highest contributor to Plotly's Python Library, Adam contributed many key features to the library including gantt charts, sploms, and county choropleths. He served as the core contributor of the Plotly Python library for 3 years, pushing the total downloads to over 3 million.",
      'Adam holds a B.Sc. in Mathematics from McGill University. In his spare time, he likes to play jazz piano and draw short animations.',
    ],
    icons: {
      email: 'mailto:adam@zyphr.ca',
      github: 'https://github.com/Kully',
      linkedin: 'https://www.linkedin.com/in/adam-kulidjian-59309467/',
    },
    img: '/images/team/adam.jpg',
  },
]

function displayTeamCard(TeamCard, i) {
  let image = null
  if (TeamCard.img == '') {
    image = <PlaceholderImage />
  } else {
    image = <Image src={TeamCard.img} width="100%" height="100%" layout="responsive" objectFit="cover" />
  }

  let bio = null
  if (Array.isArray(TeamCard.bio)) {
    bio = TeamCard.bio.map((bioPara, i) => (
      <p key={i} style={styles.cardContentBioPara}>
        {bioPara}
      </p>
    ))
  }

  let icons = []
  if ('github' in TeamCard.icons && TeamCard.icons.github) {
    icons.push(
      <div style={{ paddingRight: '1em' }} key={1}>
        <Link href={TeamCard.icons.github}>
          <a>GitHub</a>
        </Link>
      </div>,
    )
  }
  if ('linkedin' in TeamCard.icons && TeamCard.icons.linkedin) {
    icons.push(
      <div key={2}>
        <Link href={TeamCard.icons.linkedin}>
          <a>LinkedIn</a>
        </Link>
      </div>,
    )
  }

  return (
    <div className="col-lg-6 col-md-6 col-sm-12 fade-in pl-lg-5 pr-lg-0 pl-md-3 pr-md-3 pb-md-0 pb-sm-5 p-0" style={styles.card} key={i}>
      <div style={styles.cardImage}>{image}</div>
      <div style={styles.cardContent}>
        <h5 style={styles.cardContentName}>{TeamCard.name}</h5>
        <h6 style={styles.cardContentRole}>{TeamCard.role}</h6>
        {bio}
        <div className="row no-gutters justify-content-start">{icons}</div>
      </div>
    </div>
  )
}

const Team = () => (
  <Section id="team">
    <div className="row no-gutters">
      <div className="col-lg-4 col-md-12 col-sm-12">
        <SectionHeading>Team</SectionHeading>
        <SectionContent>
          <p>Meet the humans behind the sparkle sparkle.</p>
        </SectionContent>
      </div>
      <div className="col-lg-8 col-md-12 col-sm-12">
        <div className="row no-gutters">{TeamCardInfo.map((TeamCard, i) => displayTeamCard(TeamCard, i))}</div>
      </div>
    </div>
  </Section>
)

export default Team

const styles = {
  card: {
    // backgroundColor: 'var(--color-background-inner)',
    transition: 'all 0.3s ease 0s',
  },
  cardImage: {
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.05)',
    filter: 'gray' /* IE6-9 */,
    WebkitFilter: 'grayscale(1)' /* Google Chrome, Safari 6+ & Opera 15+ */,
    filter: 'grayscale(1)' /* Microsoft Edge and Firefox 35+ */,
  },
  cardContent: {
    margin: '20px 0 0 0',
  },
  cardContentName: {
    marginBottom: '5px',
    textAlign: 'center',
  },
  cardContentRole: {
    marginBottom: '10px',
    color: 'var(--color-primary)',
    textAlign: 'center',
  },
  cardContentBioPara: {
    marginBottom: '10px',
  },
  cardContentIcons: {
    // marginBottom: '10px',
  },
}
