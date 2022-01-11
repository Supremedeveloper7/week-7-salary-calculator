$(onReady);

let annualSalary = 0;

function onReady() {
    console.log('Jquery Loaded');
    
   $('#submitButton').on('click', addEmployee )

   $('tbody').on('click', '.deleteButton', deleteEmployee)
    
}


function addEmployee (event){
    console.log('The add employee button was clicked');
    
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = $('#idNumber').val();
    let title= $('#positionTitle').val();
    let salary = $('#annnualSalary').val();

    
    console.log('First Name is :', firstName);
    console.log('Last Name is:',lastName);
    console.log('The ID is:', id);
    console.log('Title is :', title);
    console.log('Salary is:', salary);

    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#positionTitle').val('');
    $('#annnualSalary').val('');

    
    $('tbody').append(`
    <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${id}</td>
    <td>${title}</td>
    <td>${salary}</td>
    <td><button class="deleteButton">Delete</button></td>

     </tr>
     `)

     annualSalary += Number(salary);
     
     const monthlySalary = annualSalary / 12;
     
     $('#monthly-salary').text(monthlySalary.toFixed(2));

     if (monthlySalary > 20000) {
     $('#monthly-salary').css('color', 'red');
    
     } 

}

function deleteEmployee(event) {
    $(event.target).closest('tr').remove();
}





  
   