# Context

At LeHibou, we manage complex business logic and data processing for our users.

Your job is to create all the logic for a simple application where the user can create, read, update and delete shopping lists.
Then, the user can add items to the list and get the total calories of the list.

In addition of this, you must be create a README for explaining your thought process and yours choices would be appreciated.

## User stories

- As a user, i want to be able to create a shopping list with a name.
- And i want to be able to add items to this list.
- When i add an item to a list, a call is made for get item calories and add to the total calories of the list.
- I can see the total calories of the list on at the bottom of the card, this value should be dynamic.
- I can delete a complete list

## Acceptance criterias

If one of this criteria is not met, the test will be considered as **failed**.

- The user can create a list with a name
- The user can add items to the list, and see the calories of the item
- The user can see the total calories of the list
- The user can delete a list

## Evaluation criterias

- Code quality
- Code architecture
- User experience

We are interested in how you approach the problem and how you solve it. 
You don't have to implement the wireframe design, feel free to use your creativity. 

### Technical specifications

- The project is setup with **Nuxt 3**, **Tailwind**, and **NuxtUi**, that mean you are free to use **NuxtUi**. 
- We have implemented a eslint config, _please make sure to not submit your test with errors/warnings_
- We have also implemented vue-query, you can use it, or replace it with **Pinia**

## API

For get the calories of an item, you can use this API edanam.com, we have already created an account for you, you can find the credentials in the email we sent you.

You must have to set the credentials in the `.env` file, you can find the `.env.example` file in the root of the project.

Here is the [swagger link](https://developer.edamam.com/food-database-api-docs), you can try credentials and let us know if you have any issue. For this test you have to use the `parser` endpoint.

Here is an exemple of the response

```json
{
  "text": "coke",
  "parsed": [
    {
      "food": {
        "foodId": "food_akkrnydbe7qcavbbelv3jbsb0o7p",
        "label": "Coke",
        "knownAs": "cola",
        "nutrients": {
          "ENERC_KCAL": 37,
          "PROCNT": 0.07,
          "FAT": 0.02,
          "CHOCDF": 9.56,
          "FIBTG": 0
        },
        "category": "Generic foods",
        "categoryLabel": "food",
        "image": "https://www.edamam.com/food-img/e86/e8658e93517d224d01b8e42b4f568a06.jpg"
      }
    }
  ]
}
```

In our application, we will use the `ENERC_KCAL` value to get the calories of the item.

**Questions/Answers**
- If my query as many items, which item should I select ?
  - _Select the first item of the response_
- What should I do if the response is empty ?
  - _You can display a message to the user_
- What should I do if the API is down ?
  - _You can display a message to the user_


### Wireframes

Just to give you an idea of what we are looking for, here is a wireframe of the application, has said before, **you are free to use your creativity**.

### Bonus points

- Find to way to improve performances in case of large items list
- Loading state when fetching items calories
- Small screen responsive design
- Animations ? 
- Anything you think would be a good addition to the project
