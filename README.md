# tech-products-chatbot


This is our main node.js service that receives requests from the frontend and interact with dialogFlow system using api.ai node sdk before
replying to the user request.

![node](https://user-images.githubusercontent.com/33251219/35193494-461d8a20-fe9b-11e7-8fb7-ab826ae9dd42.png)


# Deploy to:
[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

 

- The service is tested using : www.hurl.it

- Link : https://products-chatbot.herokuapp.com

# Technical schema

This Schema showcases how the paltforms & technologies interact.

![technical_schema](https://user-images.githubusercontent.com/33251219/35193973-fcda4f94-fea2-11e7-882f-2841fa33af9b.png)



# How it works?

- The client send a get request to the service after the user speech is catched.
- The node.js service send a request to dialogFlow (api.ai) platform by the means of api.ai node sdk.
- DialogFlow establishes interaction with our webhook if needed.
- Our service is in a listening state for the dialogFlow response.
- Once the speech response is received, it is sent back to the client and the user begins listening to the response of his request.

# Tools

- Chrome web speech api to record conversations.

- apiai node sdk to establish communication with the DialogFlow ai system.




# Images

 

These two screenshots show the intents & entities created in our dialogFlow project.

![intents](https://user-images.githubusercontent.com/33251219/35193970-f5a52dc0-fea2-11e7-8551-aad973170441.png)

![entities](https://user-images.githubusercontent.com/33251219/35193969-f531358c-fea2-11e7-99cd-55ec6b78e50d.png)
