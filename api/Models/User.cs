using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using ContasApp.Bases;

namespace ContasApp.Models;

// TODO: Fazer validação de senha forte
// TODO: Fazer validação de campo único

[Table("users")]
public sealed class User : ModelBase
{
    [Column("username")]
    [DataType(DataType.Text)]
    [MaxLength(256)]
    [MinLength(2)]
    [Required]
    public required string Username { get; set; }

    [Column("email")]
    [DataType(DataType.EmailAddress)]
    [EmailAddress]
    [MaxLength(256)]
    [MinLength(4)]
    [Required]
    public required string Email { get; set; }

    [Column("password")]
    [DataType(DataType.Password)]
    [MaxLength(128)]
    [MinLength(8)]
    [Required]
    public required string Password { get; set; }

    [Column("name")]
    [DataType(DataType.Text)]
    [MaxLength(256)]
    [MinLength(2)]
    [Required]
    public required string Name { get; set; }
}
