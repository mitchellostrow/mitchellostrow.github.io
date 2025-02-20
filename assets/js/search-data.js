// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-gallery/";
        
      },
    },{id: "news-graduated-from-yale",
          title: 'Graduated from Yale.',
          description: "",
          section: "News",},{id: "news-starting-phd",
          title: 'Starting PhD! 👨🏻‍🎓',
          description: "",
          section: "News",},{id: "news-our-abstract-do-deep-neural-networks-have-concepts-was-selected-as-a-talk-at-the-philosophy-of-deep-learning-conference-hosted-at-nyu",
          title: 'Our abstract ‘Do Deep Neural Networks Have Concepts?’ was selected as a talk...',
          description: "",
          section: "News",},{id: "news-after-four-excellent-rotations-i-am-joining-ila-fiete-s-lab-for-my-thesis-work",
          title: 'After four excellent rotations, I am joining Ila Fiete’s lab for my thesis...',
          description: "",
          section: "News",},{id: "news-my-first-full-paper-preprint-is-out-https-arxiv-org-abs-2306-10168-and-was-accepted-to-neurips-2023",
          title: 'My first full paper preprint is out! https://arxiv.org/abs/2306.10168, and was accepted to NeurIPS,...',
          description: "",
          section: "News",},{id: "news-my-paper-beyond-geometry-comparing-the-temporal-structure-of-computation-in-neural-circuits-with-dynamical-similarity-analysis-was-accepted-to-the-cognitive-computational-neuroscience-conference-as-an-oral-presentation-4-and-to-cosyne-computational-systems-neuroscience-conference-as-an-oral-2",
          title: 'My paper, “Beyond Geometry: Comparing the Temporal Structure of Computation in Neural Circuits...',
          description: "",
          section: "News",},{id: "news-i-m-very-fortunate-to-have-won-the-national-science-foundation-s-graduate-research-fellowship-to-fund-the-next-three-years-of-my-research",
          title: 'I’m very fortunate to have won the National Science Foundation’s Graduate Research Fellowship,...',
          description: "",
          section: "News",},{id: "news-my-second-paper-delay-embedding-theory-of-neural-sequence-models-was-accepted-to-the-icml-2024-workshop-on-next-generation-sequence-models-https-arxiv-org-abs-2406-11993v1",
          title: 'My second paper, “Delay Embedding Theory of Neural Sequence Models”, was accepted to...',
          description: "",
          section: "News",},{id: "news-i-m-starting-an-internship-at-meta-doing-machine-learning-research-on-the-neuromotor-interfaces-team-in-new-york-city",
          title: 'I’m starting an internship at Meta doing Machine Learning Research on the Neuromotor...',
          description: "",
          section: "News",},{id: "news-i-ve-successfully-passed-my-qualification-exam",
          title: 'I’ve successfully passed my qualification exam!',
          description: "",
          section: "News",},{id: "news-very-happy-to-have-contributed-to-the-computation-thru-dynamics-benchmark-led-by-chris-versteeg-https-www-biorxiv-org-content-10-1101-2025-02-07-637062-abstract",
          title: 'Very happy to have contributed to the Computation-Thru-Dynamics Benchmark, led by Chris Versteeg!...',
          description: "",
          section: "News",},{id: "news-our-submission-agentdsa-dynamical-similarity-analysis-for-neural-controllers-was-accepted-to-the-reinforcement-learning-and-decision-making-conference",
          title: 'Our submission “AgentDSA: Dynamical Similarity Analysis for Neural Controllers” was accepted to the...',
          description: "",
          section: "News",},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mitchellostrow", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mitchell-ostrow", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=WRIrZ2cAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/neurostrow", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
