using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Usuario
    {
        [Key]
        public int CdUsuario { get; set; }

        [Required(ErrorMessage = "Insira um e-mail")]
        public string DsEmail { get; set; }

        [Required(ErrorMessage = "Insira uma senha")]
        public string DsSenha { get; set; }

        [Required(ErrorMessage = "Insira seu nome")]
        public string DsNome { get; set; }
    }
}
