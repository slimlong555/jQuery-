const api = jQuery('.test')
api.addClass('red')
   .addClass('blue')//链式  this就是api
   //obj.fn(p1)
   //obj.fn.call(obj,p1)



   jQuery('.test1')
   .find('.children')
   .addClass('blue')
   .end()
   .addClass('yellow')

   const x = jQuery('.test')
   x.children().print()
