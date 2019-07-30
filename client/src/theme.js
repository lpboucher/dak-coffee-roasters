export const DakTheme = {
    global: {
        colors: {
            'mainDark': '#343434',
            'lightGrey': '#f7f8f9',
            'darkGrey': '#dcddde',
            'mainWhite': '#ffffff',
            'highlight': '#c5b6a4',
            'darkHighlight': '#a96c35',
            brand: '#a96c35',
            focus: '#a96c35',
            control: {dark: 'mainDark', light: 'darkHighlight'},
        },
        drop: {
          zIndex: '1021',
        },
        font: {
          family: 'Montserrat',
          size: '16px',
        },
        focus: {
          border: {
            color: 'darkHighlight'
          }
        },
        control: {
          border: {
            color: 'darkHighlight',
            radius: '4px'
          }
        },
        input: {
          padding: '6px',
          weight: 'normal'
        }
      },
      anchor: {
        color: {dark: 'mainWhite', light: 'mainDark'}
      },
      button: {
        border: {
          radius: '4px',
          color: 'mainDark'
        },
        color: 'mainWhite',
        extend: {
          textTransform: "uppercase"
        },
        padding: {
          horizontal: '20px',
          vertical: '10px'
        },
        primary: {
          color: 'mainDark'
        }
      },
      checkBox: {
        color: 'darkHighlight',
      },
      formField: {
        border: {
          color: 'mainDark',
          side: 'all'
        },
        margin: {
          bottom: "medium"
        }
      },
      heading: {
        level: {
          1: {
            xsmall: {
              size: "12px",
              height: "24px",
              maxWidth: "100%"
          },
            medium: {
                size: "24px",
                height: "48px",
                maxWidth: "100%"
            },
          },
          2: {
            small: {
                size: "18px",
                height: "36px",
            },
          },
          3: {
            small: {
                size: "14px",
                height: "28px",
            },
            medium: {
              size: "18px",
              height: "36px",
          },
          }
        },
        extend: {
          textTransform: "uppercase"
        }
      },
      paragraph: {
        small: {
          size: "10px",
          height: "20px",
        },
        medium: {
          size: "16px",
          height: "32px",
        },
        large: {
          size: "28px",
          height: "56px",
        },
        xlarge: {
          size: "40px",
          height: "64px",
        },
      },
      select: {
        options: {
          container: {
            background: "mainHighlight"
          },
          text: {
            weight: 'normal'
          }
        }
      },
      text: {
        xsmall: {
          size: "12px",
          height: "20px",
        },
        small: {
          size: "14px",
          height: "20px",
        },
        medium: {
          size: "16px",
          height: "32px",
        },
        large: {
          size: "28px",
          height: "56px",
        },
        xlarge: {
          size: "40px",
          height: "64px",
        },
        extend: {
          whiteSpace: "pre-wrap"
        }
      }
    };