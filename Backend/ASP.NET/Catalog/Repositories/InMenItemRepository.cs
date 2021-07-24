using System.Collections.Generic;
using Catalog.Entities;
using System;
using System.Linq;


namespace Catalog.Repositories
{
    public class InMemItemRepository : IItemRepository
    {
        private readonly List<Item> items = new(){
            new Item {
                Id = Guid.NewGuid(),
                Name = "Potion",
                Price = 9,
                CreateDate = DateTimeOffset.UtcNow
            },
            new Item {
                Id = Guid.NewGuid(),
                Name = "Iron Sword",
                Price = 20,
                CreateDate = DateTimeOffset.UtcNow
            },
            new Item {
                Id = Guid.NewGuid(),
                Name = "Bronze Shield",
                Price = 18,
                CreateDate = DateTimeOffset.UtcNow
            }
        };

        public IEnumerable<Item> GetItems(){
            return items;
        }

        public Item GetItem(Guid id){
            return items.Where(item => item.Id == id).SingleOrDefault();
        }
    }
}