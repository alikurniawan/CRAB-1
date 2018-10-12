function getPeople() {
    var userId = 'me';
    var people;
    var pageToken;
    do {
      people = Plus.People.list(userId, 'visible', {
        pageToken: pageToken
      });
      if (people.items) {
        for (var i = 0; i < people.items.length; i++) {
          var person = people.items[i];
          Logger.log(person.displayName);
        }
      } else {
        Logger.log('No people in your visible circles.');
      }
      pageToken = people.nextPageToken;
    } while (pageToken);
  }

  getPeople();