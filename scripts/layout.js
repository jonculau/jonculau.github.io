$.get('../includes/footer.html', (data)=>{
    $('#footer').replaceWith(data);
});
$.get('../includes/nav.html', (data)=>{
    $('#nav').replaceWith(data);
});