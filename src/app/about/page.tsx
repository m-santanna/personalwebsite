import { StyledLink } from "@/components/styled-link"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MSS | About",
  description: "Matheus's story, interests, and more.",
}

const GOOGLE_MAPS_ACRE_URL = "https://maps.app.goo.gl/e4nhwxYjuZ6Ta69dA"
const GOOGLE_MAPS_POA_URL = "https://maps.app.goo.gl/PWBJv7LgsBHxQSjo8"
const GOOGLE_MAPS_LISBON_URL = "https://maps.app.goo.gl/vCNQcM7MC7uTv8zk9"
const BIOMEDICAL_ENGINEERING_URL = "https://fenix.tecnico.ulisboa.pt/cursos/mebiom/curriculo"
const COMPUTER_SCIENCE_URL = "https://www.fct.unl.pt/en/education/course/bachelor-s-degree-computer-science-and-engineering"
const ONE_PIECE_URL = "https://www.imdb.com/title/tt0388629/"
const R6_URL = "https://www.ubisoft.com/en-us/game/rainbow-six/siege"
const ANIME_URL = "https://en.wikipedia.org/wiki/Anime"
const GAMER_URL = "https://en.wikipedia.org/wiki/Gamer"
const KARATE_URL = "https://en.wikipedia.org/wiki/Karate"
const GYM_URL = "https://www.google.com/search?q=gym+close+to+me"
const PADEL_URL = "https://en.wikipedia.org/wiki/Padel"
const LEARNING_URL = "https://en.wikipedia.org/wiki/Learning"
const DEVOPS_URL = "https://en.wikipedia.org/wiki/DevOps"

const paragraphClassName = "max-w-2xl text-base sm:text-lg text-foreground leading-relaxed"

function Page() {
  return (
    <div className="space-y-20 mb-6">
      {/* // origin story */}
      <section className="space-y-4 mt-10 md:mt-22">
        <h2 className="font-mono text-xl sm:text-2xl text-accent font-semibold">
          // origin story
        </h2>
        <p className={paragraphClassName}>
          Notice that I will be yapping like crazy in this about page. Don't complain later saying I didn't warn you!! If you are not down
          too see a young man's soul materialized into text, you should go to another page!
          We good? We good. Ok. With that one out of the way, let me see where to begin... <span className="line-through">I was born
            in <StyledLink href={GOOGLE_MAPS_ACRE_URL} text="Rio Branco, AC" /> in 2003</span> nah, too far back. <span className="line-through">
            I moved to <StyledLink href={GOOGLE_MAPS_POA_URL} text="Porto Alegre, RS" /> to follow my dreams of going to a big city
          </span> eh... a little cringey...<span className="line-through"> I went to an even bigger city
            like <StyledLink href={GOOGLE_MAPS_LISBON_URL} text="Lisbon, PT" /></span> ok... enough of this.
        </p>
        <p className={paragraphClassName}>
          Before coming to Portugal, I had this grandiose wish of leaving my parents wings, and to live alone.
          Bear in mind that I was just a 16 years old kid, wishing to conquer the world and beyond. I also was pretty clueless of what
          to do with my life. In every sense of the word lol, but specially in terms of career. I basically googled:
          "Jobs paying good in 2019", and stumbled upon Biomedical Engineering. I used to like my biology classes, so It felt like a good idea.
          This degree didn't exist in my city at that time, and Brazil only had it in one University in São Paulo. 2 + 2 = 5,
          and if I gotta leave town, I might as well leave the country.
        </p>
        <p className={paragraphClassName}>
          Therefore, I chose Portugal. It made a lot of sense. I had some relatives here, and my english was not a strength back
          then. I got into <StyledLink href={BIOMEDICAL_ENGINEERING_URL} text="Biomedical Engineering at IST" />, and it felt great.
          Unfortunately, greatness does not last forever, and it felt like I wasn't learning anything interesting. My mornings were bland, and the only things that kept me excited were
          the Programming related classes. When I had this epiphany, the path forward was clear. Why not switch to a degree specialized in it?
          I also had moved out of my dorms, so it made sense to go to a closer university too.
          I got into <StyledLink text="Computer Science at FCT-NOVA" href={COMPUTER_SCIENCE_URL} />, and now... Life is pretty good.
          Moving from Brazil to Portugal was a big leap. Living alone was not as easy as I envisioned.
          But the problems I face today are all part of a greater good! That is: character development.
        </p>
        <p className={paragraphClassName}>
          Enough yapping. In summary, I now *almost* do this for a living. I enjoy it quite a lot.
          It always surprises me to hear from colleagues that they don't like to code. Why would you come to one of the most
          saturated markets in the world, constantly threatend by AI, with one of the most unpredictable futures, in all markets, if not for passion?
        </p>
      </section>

      {/* $ cat interests.txt */}
      <section className="space-y-4">
        <h2 className="font-mono text-xl sm:text-2xl text-accent font-semibold">
          $ cat interests.txt
        </h2>
        <p className={paragraphClassName}>
          You could easily say I am a nerd. I would not be offended. In fact, I would agree. I've been a <StyledLink href={GAMER_URL} text="gamer" /> my
          entire life. I was barely a professional <StyledLink href={R6_URL} text="R6" /> player
          in my late 15's. The pro sports life is not worth it tho. Aside from games, I have also seen a toon of <StyledLink href={ANIME_URL} text="anime" />.
          It is basically part of my
          identity. As a matter of fact, <StyledLink href={ONE_PIECE_URL} text="One Piece" /> was something that I only started watching in 2021, and it is
          already my favorite piece of media. Crazy how a fictional story could be this impactful. If you haven't tried One Piece, you should. I probably
          sound like your local addict, but trust me, it will be worth your time.
        </p>
        <p className={paragraphClassName}>
          Before Portugal, I used to do <StyledLink href={KARATE_URL} text="Karate" />. In fact, I was pretty decent. I had a brown belt, and didn't become a
          black belt because the exam was scheduled
          to a month after my trip to Portugal. Either way, I used to be a decently atlethic person. Funny how the phase of our lives dictate how close we are
          to some of our hobbies. At least I am still going to the <StyledLink href={GYM_URL} text="gym" />, but my cardio sucks.
          Gotta get more <StyledLink href={PADEL_URL} text="Padel" /> matches in. Me and my friends have
          started playing it once a week. Very fun sport, would recommend you, my dear reader, to try it too.
        </p>
      </section>

      {/* currently running: */}
      <section className="space-y-4">
        <h2 className="font-mono text-xl sm:text-2xl text-accent font-semibold">
          http://localhost:3000
        </h2>
        <p className={paragraphClassName}>
          Right now, I am focused on <StyledLink href={LEARNING_URL} text="learning" />. Life is always about learning, but it should
          happen specially when we are young. Even though I have quite a bit of experience, I still feel behind. That may be the classic
          impostor syndrome that every single Software Engineer experience. In a way, it is good to feel this way. It signals that I care,
          and want to be better. In another, it tells me that I am still far from reaching the goal: "Retiring young and looking for the One Piece".
        </p>
        <p className={paragraphClassName}>
          Anyway, I am currently trying to deepen my knowledge of <StyledLink href={DEVOPS_URL} text="DevOps" /> as a whole.
          If you want to chat, build something together, TEACH ME, or just say hi, reach out on any of my socials. I would love to chat.
        </p>
      </section>
    </div>
  )
}

export default Page
