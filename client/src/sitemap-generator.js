require("babel-register")({
    presets: ["es2015", "react"]
  });
   
  const axios = require("axios");
  const router = require("./sitemap-routes").default;
  const Sitemap = require("react-router-sitemap").default;
  
  async function generateSitemap() {
    try {
        const res = await axios.get("https://dakcoffeeroasters.com/api/products/EUR");
        const products = res.data.data;
        let slugMap = [];
    
        for(var i = 0; i < products.length; i++) {
            slugMap.push({ slug: products[i].slug });
        }

        const paramsConfig = {
            "/shop/:slug": slugMap
        };

        return (
          new Sitemap(router)
              .applyParams(paramsConfig)
              .build("https://www.dakcoffeeroasters.com")
              .save("./public/sitemap.xml")
        );
    } catch (e) {
        console.log(e)
    }
    
    
  }
  
  generateSitemap();