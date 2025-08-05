const dateInput = document.getElementById('date-of-birth');
    const findBtn = document.getElementById('findBtn');
    const textPara = document.getElementById('text');

    findBtn.addEventListener('click', () => {
      const dob = dateInput.value;
      if (dob !== '') {
        const dateOfBirth = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - dateOfBirth.getFullYear();
        const month = today.getMonth() - dateOfBirth.getMonth();
        const day = today.getDate() - dateOfBirth.getDate();

        if (month < 0 || (month === 0 && day < 0)) {
          age--;
        }

        textPara.textContent = `You are ${age} years old.`;
      } else {
        textPara.textContent = 'Please select your date of birth.';
      }
    }); 