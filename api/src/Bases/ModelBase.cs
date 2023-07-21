using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ContasApp.Bases;

public abstract class ModelBase
{
    [Column("id")]
    [Key]
    [Required]
    public Guid Id { get; private set; }

    [Column("is_active")]
    [Required]
    public bool IsActive { get; set; }

    [Column("created_at")]
    [Required]
    public DateTime CreatedAt { get; private set; }

    [Column("updated_at")]
    public DateTime? UpdatedAt { get; set; }

    [Column("deleted_at")]
    public DateTime? DeletedAt { get; set; }

    protected ModelBase()
    {
        Id = Guid.NewGuid();
        IsActive = true;
        CreatedAt = DateTime.Now;
    }
}
