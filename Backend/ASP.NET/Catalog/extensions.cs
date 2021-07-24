using Catalog.DTOs;
using Catalog.Entities;

namespace Catalog
{
    public static class Extensions{
        public static ItemDTO asDto(this Item item){
            return new ItemDTO{
                Id = item.Id,
                Name = item.Name,
                CreateDate = item.CreateDate,
                Price = item.Price
            };
        }
    }
}