class user_service {
    static login(formData){
        let url ="https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudant.com/flightbooking_user/_find";
    const dbusername = "apikey-v2-2mxwaz89u58vkezj2e5jfc41xn3komuaq1j49fhhmu8p";
    const dbpassword = "58de0ca6ebd4250a97d0a7d300191f68";
    const basicAuth = 'Basic '  + btoa(dbusername+ ":" +dbpassword);

    return (axios.post(url, formData, {headers: { Authorization: basicAuth}}));
    }

    static register(formData){
        let url =
        "https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudant.com/flightbooking_user";
      const dbusername = "apikey-v2-2mxwaz89u58vkezj2e5jfc41xn3komuaq1j49fhhmu8p";
      const dbpassword = "58de0ca6ebd4250a97d0a7d300191f68";
      const basicAuth = "Basic " + btoa(dbusername + ":" + dbpassword);

      return(axios.post(url, formData, { headers: { Authorization: basicAuth } }));
    }

    static homepage(){
        let url =
    "https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudant.com/add_flight/_all_docs?include_docs=true";
  const dbusername = "apikey-v2-2mxwaz89u58vkezj2e5jfc41xn3komuaq1j49fhhmu8p";
  const dbpassword = "58de0ca6ebd4250a97d0a7d300191f68";
  const basicAuth = "Basic " + btoa(dbusername + ":" + dbpassword);

  return(axios.get(url, { headers: { Authorization: basicAuth } }));
    }
}