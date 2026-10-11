Länk till inspelning 
https://funet-my.sharepoint.com/:v:/g/personal/3ggyhmu26_karlje_folkuniversitetet_nu/IQCJgUw43sFAQbFM0gP41W_dAcbz-j-ooPAP5G7scrFDaFo?e=xCnKUO

State-hantering
  Appen använder useState för att hålla reda på uppgifterna i arrayen todos. När setTodos anropas med ny data renderar React om komponenten och uppdaterar gränssnittet. Då kan till exempel en uppgift bli genomstruken när man klickar på den, eller en ny uppgift läggas till när man skickar in ett nytt värde.

Immutability
   Vi bör inte använda .push för att ändra en befintlig array, eftersom det muterar original-arrayen och React kan missa att state har ändrats. När vi till exempel vill ta bort en uppgift används .filter(), som skapar en ny array utan uppgiften som ska tas bort.

Kodgranskning

function addTodo(todos, text) {
  todos.push(text);
  return todos;
}

    Funktionen addTodo ändrar den befintliga todos-arrayen direkt med .push(). Den returnerar därför samma array, vilket kan göra att React inte upptäcker att state har ändrats och därmed inte renderar om gränssnittet korrekt.

    I React bör man skapa en ny array och uppdatera state med setTodos. Ett bättre sätt att skriva koden:

    setTodos(todos => [...todos, text]);

    Spread-syntaxen kopierar de befintliga uppgifterna till en ny array och lägger till texten utan att ändra original-arrayen.

