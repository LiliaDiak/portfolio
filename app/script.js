 $(function(){
  $("#images").removeAttr("style")
});

new Vue({
  el: "#app",
  data: {
    classTogle: false,
    about: `Hi, I'm Lily.  I'm crazy about creating cool and bright websites. My friends often call me a coding addict, but that sounds like a compliment to me.
            I'm a student of Ivan Franko National University of Lviv. I study at the Faculty of Applied Mathematics and Informatics. I hope to interest you in my
            projects, desire to study and work.`,
    skills: `<p class="skills__soft-text">Of course, in addition to hard skills, I also have soft skills:</p>
    <ul class="skills__list">
        <li class="skills__li">I am communicative, so I love working in a team.</li>
        <li class="skills__li">I like to organize my time and stick to a plan for the day.</li>
        <li class="skills__li">I never stand still, I always strive to develop.</li>
        <li class="skills__li">I am able to adapt to a new team and can study by myself.</li>
        <li class="skills__li">I accept healthy criticism.</li>
    </ul>`,
    footerText: "If you liked my work and you need me, I'm ready to talk to you. Write or call at any time (Only not at 3 in the morning).",
    isActive: false,
    activeBtn: false,
    headerActive:false,
  },
  methods: {
    addClass: function () {
      if (this.isActive) {
        this.isActive = false
      } else { this.isActive = true }
    },
    btnHidden: function () {
      if (this.activeBtn) {
        this.activeBtn = false
      } else { this.activeBtn = true }
    },
    removeSlider: function(){
      if (this.activeBtn) {
        this.activeBtn = false;
        this.isActive = false;
      }
    },
    addBurger: function(){
      if (this.headerActive) {
        this.headerActive = false;
      }else{
        this.headerActive = true;
      }
    }

  }
});

