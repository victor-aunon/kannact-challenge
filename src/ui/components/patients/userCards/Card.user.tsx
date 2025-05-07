import { Avatar, AvatarFallback, AvatarImage } from 'ui/components/avatar'
import { type User, type Patient, Roles } from 'domain/users'
import { icons } from 'ui/icons'
import './card-user.css'
import { Dialog, DialogTrigger } from 'ui/components/dialog'
import { EditDataUserModal } from 'ui/components/patients/modals/EditData.user'
import { EditDataPatientModal } from 'ui/components/patients/modals/EditData.patient'

export type UserCardProps = {
  user: User | Patient
  role: Roles
  children?: React.ReactNode
  relationship?: string
  onEdit?: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  onDelete?: () => void
}

export function UserCard({
  user,
  role,
  relationship,
  onEdit,
  onDelete,
  children,
}: UserCardProps) {
  const variantClassName = role === Roles.PATIENT ? 'primary' : 'secondary'

  return (
    <article className={`user__card user__card--${variantClassName}`}>
      <header className="user__card__header">
        <div className="user__card__header__avatar">
          <Avatar className={`avatar--${variantClassName}`}>
            {user.photo && <AvatarImage src={user.photo} />}
            <AvatarFallback>
              {user.name[0]}
              {user.surname[0]}
            </AvatarFallback>
          </Avatar>
          <p className="user__card__header__avatar__age">{user.age} yo</p>
        </div>
        <div className="user__card__header__info">
          {role === Roles.EMERGENCY_CONTACT && (
            <p className="user__card__header__info__title">Emergency contact</p>
          )}
          <p className="user__card__header__info__name">
            {user.name} {user.surname || ''}
          </p>
          {relationship && role === Roles.EMERGENCY_CONTACT && (
            <p className="user__card__header__info__item">
              <span>Relationship:</span>
              {relationship}
            </p>
          )}
          {user.email && (
            <a
              href={`mailto:${user.email}`}
              className="user__card__header__info__item"
            >
              {icons.email} {user.email}
            </a>
          )}
          {user.phone && (
            <a
              href={`tel:${user.phone}`}
              className="user__card__header__info__item"
            >
              {icons.phone} {user.phone}
            </a>
          )}
        </div>
      </header>
      {children}
      <footer className="user__card__footer">
        {onEdit && (
          <Dialog>
            <DialogTrigger asChild>
              <button className="user__card__button user__card__button--edit">
                {icons.edit} Edit
              </button>
            </DialogTrigger>
            {role === Roles.PATIENT && (
              <EditDataPatientModal
                patient={user as Patient}
                title="Edit Patient"
                description="Edit the patient's information"
                handleSubmit={onEdit}
              />
            )}
            {role === Roles.EMERGENCY_CONTACT && (
              <EditDataUserModal
                user={user}
                role={role}
                title="Edit Emergency Contact"
                description="Edit the emergency contact's information"
                handleSubmit={onEdit}
              />
            )}
          </Dialog>
        )}
        {onDelete && (
          <button
            className="user__card__button user__card__button--delete"
            onClick={onDelete}
          >
            {icons.delete} Delete
          </button>
        )}
      </footer>
    </article>
  )
}
