export default {
  editor: {
    label: {
      en: "ww-weweb-seminar",
    },
  },
  properties: {
    textColor: {
      label: {
        en: "Text color",
      },
      type: "Color",
      defaultValue: "#F23636",
    },
    setting: {
      hidden: true,
      defaultValue: {
        icon: 'https://www.computerhope.com/jargon/h/img.png'
      }
    },
    cards: {
      hidden: true,
      defaultValue: [
        {
          icon: 'https://www.computerhope.com/jargon/h/img.png',
          urlPrefix: 'String',
          title: 'String', // shows as tooltip on hover
          subNav: [
            { 
              urlPrefix: 'String',
              icon: 'https://www.computerhope.com/jargon/h/img.png',
              title: 'String',
            }
          ],
          showSubNav: 'Boolean', 
        },
        {
          icon: 'https://www.computerhope.com/jargon/h/img.png',
          urlPrefix: 'String',
          title: 'String', // shows as tooltip on hover
          subNav: [
            { 
              urlPrefix: 'String',
              icon: 'https://www.computerhope.com/jargon/h/img.png',
              title: 'String',
            }
          ],
          showSubNav: 'Boolean', 
        },
        {
          icon: 'https://www.computerhope.com/jargon/h/img.png',
          urlPrefix: 'String',
          title: 'String', // shows as tooltip on hover
          subNav: [
            { 
              urlPrefix: 'String',
              icon: 'https://www.computerhope.com/jargon/h/img.png',
              title: 'String',
            }
          ],
          showSubNav: 'Boolean', 
        }
      ]
    },
  },
};
