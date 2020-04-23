import getTopics from "../Services/getTopics";

describe('getTopic', () => {
  
  beforeAll(() => {
    global.fetch = jest.fn();
    //window.fetch = jest.fn(); if running browser environment
  });

    beforeEach(() => {
     
  
    });
  
    it('shows surveys after hitting the api endpoint', async () => {

      fetch.mockImplementation(() => {
        return Promise.resolve({
          status: 200,
          json: () => {
          return Promise.resolve({
             Topic: "One"
           });
         }
       });
     });

      let response = await getTopics();
      expect(fetch).toHaveBeenCalledWith("https://localhost:5001/api/topics");
      expect(response.status).toBe(200);
      
    });
  
    
  
  });