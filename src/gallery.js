function Profile() {
  return (
    <div className="columns">
      <p className="material-symbols-outlined">engineering</p>
      <p>
        <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
      </p>

      <p>
        <b>Katherine Johnson</b>, an African-American Computer at NASA, has died
        at the age of 101.<b> Katherine</b> is responsible for calculating
        trajectories for the earliest American space flights with remarkable
        precision.<b> Katherine</b> was famously portrayed in the
        Oscar-nominated film Hidden Figures.
      </p>
      <div className="line"></div>
      <p className="material-symbols-outlined">vaccines</p>
      <p>
        <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />
      </p>
      <p>
        <b>Alan L. Hart</b>, was an American physician, radiologist,
        tuberculosis researcher, writer, and novelist.<b> Hart</b> pioneered the
        use of x-ray photography in tuberculosis detection and helped implement
        TB screening programs that saved thousands of lives. As a fiction
        author,<b> Hart</b> published over 9 short stories and 4 novels, which
        incorporated drama, romance, and medical themes. Circa 1917,<b> Hart</b>{" "}
        was one of the first trans men to undergo hysterectomy in the United
        States.
      </p>
      <div className="line"></div>
      <p className="material-symbols-outlined">network_manage</p>
      <p>
        <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" />
      </p>
      <p>
        <b>Hedy Lamarr</b>, at the beginning of World War II,<b> Lamarr</b> and
        composer George Antheil developed a radio guidance system for Allied
        torpedoes, which used spread spectrum and frequency hopping technology
        to defeat the threat of jamming by the Axis powers. Although the US Navy
        did not adopt the technology until the 1960s, the principles of their
        work are now incorporated into modern Wi-Fi, CDMA, and Bluetooth
        technology, and this work led to their induction into the National
        Inventors Hall of Fame in 2014.
      </p>
    </div>
  );
}
export default function Gallery() {
  return <Profile />;
}
