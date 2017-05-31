using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyHRMS_Angular.ModelsVM.IdentityTokenViewModels
{
    public class AspNetUserRoles
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public AspNetUserRoles()
        {
            this.AspNetRoles = new HashSet<AspNetRoles>();
            this.AspNetUsers = new HashSet<AspNetUsers>();
        }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<AspNetRoles> AspNetRoles { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<AspNetUsers> AspNetUsers { get; set; }
    }
}
