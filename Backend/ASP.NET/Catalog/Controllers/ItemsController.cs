using Microsoft.AspNetCore.Mvc;
using Catalog.Repositories;
using Catalog.Entities;
using System.Collections.Generic;
using System;
using System.Linq;
using Catalog.DTOs;

namespace Catalog.Controllers
{
    [ApiController]
    [Route("[controller]")] // Whatever the name of the controller is, that's the name of the route
    public class ItemsController : ControllerBase
    {
        private readonly IItemRepository repository;

        public ItemsController(IItemRepository repository){
            this.repository = repository;
        }
        
        // GET /items
        [HttpGet]
        public IEnumerable<ItemDTO> GetItems(){
            var items = repository.GetItems().Select(item => item.asDto());

            return items;
        }
        
        // GET /items/{id}
        [HttpGet("{id}")]
        public ActionResult<ItemDTO> GetItem(Guid id){
            var item = repository.GetItem(id);

            if(item == null){
                return NotFound();
            }else{
                return repository.GetItem(id).asDto();
            }
        }
    }
}