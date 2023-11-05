<script setup lang="ts">
  import {ref} from 'vue'; 
  const introText = `Hi, I'm Jonathan.
    I specialize in creating efficient solutions that optimize performance and speed up processes.`;
  const Typed = ref('');
  const interval = setInterval(()=>{
    const typeLength = Typed.value.length;
    if(typeLength === introText.length){
      clearInterval(interval);
    }else{
      Typed.value = introText.substring(0, typeLength + 1);
    }
  }, 50);
</script>
<template>
  <main>
    <section class="introduction">
      <h1>
        <span v-html="Typed"></span>
        <span class="blinking-cursor">|</span>
      </h1>
    </section>
    <section class="section" id="about-me">
      <div class="content">
        <h1>About Me</h1>
        <p>
          I received my <span class="highlight">Bachelor of Engineering degree</span> in Control and Automation and my <span class="highlight">Master of Science degree in Electrical Engineering</span> from the esteemed Pontifical Catholic University of Rio Grande do Sul (PUC-RS, Brazil) in 2018 and 2021, respectively. In 2022, I successfully completed my MBA in Business Technology, focusing on IA, Big Data, and Data Science, also at PUC-RS.
        </p>
        <p>
          In 2018, I took on the role of Technical Leader at the Software Verification Laboratory for Measurement Instruments within LABELO/PUCRS, recognized as one of Brazil's largest and most influential compliance testing laboratories.
        </p>
        <p>
          Fast forward to 2023, I have ascended to the <span class="highlight">leadership position</span> in the Legal Metrology sector, which encompasses oversight of the software laboratory, metrological approval tests, and metrological verification within our organization. Moreover, I am at the helm of our ambitious digital transformation project, which is currently unfolding throughout our entire organization.
        </p>
      </div>
    </section>
    <section class="section" id="talk">
      <div class="content">
        <h1>I speak at events, lectures, and workshops.</h1>
        <p>I have extensive experience with ISO/IEC 17025:2017, currently serve as the coordinator of LABELO/PUCRS legal metrology testing lab, one of the main Brazilian accredited compliance testing laboratory, overseeing software verification, metrology and electromagnetic compatibility testing.</p>
        <p>
          I also have experience developing laboratory information management systems (LIMS), automating tests and design of embedded systems to automate ISO/IEC normative compliance testing procedures. I am proficient in C, C++, C#, Matlab, Python, JavaScript, and TypeScript.
        </p>
        <p>
          My master research focused on non-linear control systems, specifically on the design of a robust controller for a <a href="https://github.com/jonculau/sba-matlab">Stewart Platform</a>. I have experience with the design of control systems, embedded systems, and real-time systems.
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
section {
  padding-inline: 50px;
  padding-top: calc(1.5*var(--nav-height));
}

#talk{
  position: relative;
  z-index: 1;
  
}
#talk h1{
  color: var(--cp-color);
  border-color: var(--cp-color);
}
#talk p{
  color: var(--cs-color);
}
#talk::before{
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  width: 100%;
  height: 100%;
  z-index: -1;
  background: radial-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('../assets/presentation.jpg');
  background-size: cover;
}
#talk a{
  color: var(--cp-color);
}

.introduction {
  padding-top: 125px;
  padding-inline: 25px;
  min-height: 100vh;
  background:radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('../assets/personal-photo.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.highlight {
  color: var(--accent-color);
  font-weight: bolder;
}

.section {
  min-height: 100vh;
  padding-bottom: 2em;
}

.section p+p {
  margin-top: 1em;
}

p {
  text-align: justify;
}

.introduction h1 {
  color: var(--background-color);
  text-align: left;
  border: none;
  font-family: monospace  ;
}
.blinking-cursor {
  animation: blink-caret .75s step-end infinite;
}
@media screen and (max-width: 768px) {
  .introduction h1 {
    font-size: 2em !important;
  }
}
@media screen and (min-width: 768px) {
  .introduction h1 {
    font-size: 3em !important;
    max-width: 50%;
  } 
}

.content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 25px;
  font-size: 1.2em;
  line-height: 1.5em;
}

@keyframes blink-caret{
  from, to { color: transparent }
  50% { color: inherit }
}   
</style>
