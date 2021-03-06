import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const Bio = () => {
  const data = useStaticQuery(graphql`
    {
      bio1: file(relativePath: { eq: "bio/bio1.jpg" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            srcSetWebp
            ...GatsbyImageSharpFluid
          }
        }
      }
      bio2: file(relativePath: { eq: "bio/bio2.jpg" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            srcSetWebp
            ...GatsbyImageSharpFluid
          }
        }
      }
      bio3: file(relativePath: { eq: "bio/bio3.jpg" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            srcSetWebp
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div className="px-6 lg:px-0 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-3 gap-6 mt-12">
          <Img
            fluid={data.bio2.childImageSharp.fluid}
            className="w-full rounded shadow-md"
          />
          <Img
            fluid={data.bio1.childImageSharp.fluid}
            className="w-full rounded shadow-md"
          />
          <Img
            fluid={data.bio3.childImageSharp.fluid}
            className="w-full rounded shadow-md"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-gray-800 my-8 text-lg">
            Danceland was billed as “Iowa’s Smartest Ballroom” and it would be
            hard to argue that point. The ballroom was built in the heart of
            downtown Cedar Rapids in 1926 and soon became a popular social
            destination for South Eastern Iowa. In the early years the ballroom
            welcomed many of the popular orchestras and big bands of the day –
            Duke Ellington, Glenn Miller, Count Basie, Benny Goodman, Tommy
            Dorsey with Frank Sinatra, Jimmy Dorsey, Woody Herman, Lawrence
            Welk, Les Brown with Doris Day, Stan Kenton and Louis Armstrong were
            some of the bigger names that swung by.
          </p>
          <hr className="style-eight" />
          <p className="text-gray-800 my-8 text-lg">
            Danceland entered the rock ‘n’ roll era on October 6, 1955 with the
            appearance of Bill Haley &amp;amp; the Comets. The ballroom
            eventually evolved into a rock ‘n’ roll hot spot after Darlowe
            Oleson and Bernie Storck became the co-managers in 1956.
          </p>
          <hr className="style-eight" />
          <p className="text-gray-800 my-8 text-lg">
            Under Darlowe and Bernie’s tutelage Danceland became the place in
            Cedar Rapids to see, hear and dance to live rock ‘n’ roll music. In
            the late ‘50s / early ‘60s the ballroom presented a “who’s who” of
            rock’s pioneers – Chuck Berry, Roy Orbison, Jerry Lee Lewis, Brenda
            Lee, The Everly Brothers, Eddie Cochran, Conway Twitty, Gene Vincent
            &amp;amp; his Blue Caps, Johnny Cash, Carl Perkins, Chubby Checker,
            Bobby Vee, Del Shannon, Joey Dee &amp;amp; the Starliters, The
            Ventures, Bobby Darin, Wanda Jackson, Gene Pitney, The 4 Seasons,
            Neil Sedaka, The Fendermen, Duane Eddy, Brian Hyland, Johnny
            &amp;amp; the Hurricanes and Bobby Rydell are but a mere sampling.
          </p>
          <hr className="style-eight" />
          <p className="text-gray-800 my-8 text-lg">
            The “Winter Dance Party” tour was scheduled to play Danceland on
            February 6, 1959. Just days before that highly anticipated concert
            Buddy Holly, Ritchie Valens and J.P. “Big Bopper” Richardson
            perished in rock ‘n’ roll’s first tragic plane crash. The old show
            biz saying “the show must go on” applied in this case. A revamped
            lineup was rushed together to finish the remaining thirteen dates of
            the tour. The “Winter Dance Party” lineup that appeared at Danceland
            included holdovers Dion &amp; the Belmonts, The Crickets (with
            Ronnie Smith on lead vocals) and Frankie Sardo who were joined by
            Frankie Avalon and Jimmy Clanton.
          </p>
          <hr className="style-eight" />
          <p className="text-gray-800 my-8 text-lg">
            Other 1960s hit-makers that graced the Danceland stage include (take
            a deep breath) The Beach Boys, The Yardbirds, Mitch Ryder &amp; the
            Detroit Wheels, The Animals, The Turtles, Beau Brummels, The
            Ronettes, The Hollies, Gary Lewis &amp; The Playboys, The Music
            Machine, Lonnie Mack, The Strangeloves, Jr. Walker &amp; The All
            Stars, The Castaways, The New Colony Six, The Crystals, ? &amp; the
            Mysterians, Jan &amp; Dean, The Gentrys, The Marketts, Linda Scott,
            Sam The Sham &amp; the Pharaohs, The Left Banke, Jay &amp; The
            Americans, Lou Christie, The McCoys, The Kingsmen, Guess Who, The
            Trashmen, Cannibal &amp; The Headhunters, Bobby Goldsboro, The
            Fabulous Flippers, Dee Jay &amp; the Runaways and The Velaires to
            name a few!
          </p>
          <hr className="style-eight" />
          <p className="text-gray-800 my-8 text-lg">
            Not to mention the great country/western stars like Bob Wills &amp;
            His Texas Playboys, Marty Robbins, Kitty Wells, Don Gibson, Webb
            Pierce, Porter Wagoner, Johnny Horton, Buck Owens, Jim Reeves, Hank
            Thompson, Faron Young, Jimmy Dean and Roger Miller.
          </p>
          <hr className="style-eight" />
          <p className="text-gray-800 my-8 text-lg">
            The ballroom also provided a musical proving-ground that allowed
            many of the top bands in the area to “hone their skills”. Regional
            favorites like Eddie Randall &amp; The Downbeats, Dale Thomas &amp;
            the Bandera Boys, The Rock ‘N Flames, The Escorts, Al’s
            Untouchables, The Legends, The Stompers and others all rocked
            Danceland’s stage as headliners or served as the opening act for a
            national touring group.
          </p>
          <hr className="style-eight" />
          <p className="text-gray-800 my-8 text-lg">
            Danceland was a second story ballroom above the Tropic Lanes bowling
            alley! At the top of the large stairway were large (28” x 44”)
            hand-painted posters that informed the concert goers of current or
            upcoming shows. These beautiful one-of-a-kind posters were the
            creative work of local artist Andy Jennings. The surviving posters
            from the “Legendary Danceland Poster Collection” have become quite
            the collector’s item today.
          </p>
          <hr className="style-eight" />
          <p className="text-gray-800 my-8 text-lg">
            Danceland remained an active ballroom until 1968. The building then
            became the victim of urban renewal and was torn down to make room
            for the Cedar Rapids Five Seasons Center. Cedar Rapids lost not only
            a terrific music venue, but it also lost one of its most popular
            gathering places and the hub the local music community revolved
            around.
          </p>
          <hr className="style-eight" />
          <p className="text-gray-800 my-8 text-lg">
            The rich history of Danceland Ballroom was recognized by the Iowa
            Rock ‘n’ Roll Music Association’s Hall of Fame in 2000.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Bio
