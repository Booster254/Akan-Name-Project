document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const form = document.getElementById('nameForm');
    const dob = new Date(form.dob.value);
    const gender = form.gender.value;
  
    function getAkanName(day, gender) {
      if (gender === "male") {
        switch (day) {
          case 0:
            return "Kwasi";
          case 1:
            return "Kwadwo";
          case 2:
            return "Kwabena";
          case 3:
            return "Kwaku";
          case 4:
            return "Yaw";
          case 5:
            return "Kofi";
          case 6:
            return "Kwame";
          default:
            return "";
        }
      } else if (gender === "female") {
        switch (day) {
          case 0:
            return "Akosua";
          case 1:
            return "Adwoa";
          case 2:
            return "Abenaa";
          case 3:
            return "Akua";
          case 4:
            return "Yaa";
          case 5:
            return "Afua";
          case 6:
            return "Ama";
          default:
            return "";
        }
      } else {
        return "";
      }
    }
  
    const dayOfWeek = dob.getDay();
    const akanName = getAkanName(dayOfWeek, gender);
  
    document.getElementById('result').textContent = `Your Akan Name is: ${akanName}`;
  });
  