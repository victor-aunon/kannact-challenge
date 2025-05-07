import { Roles, type Patient, type User } from 'domain/users'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from 'ui/components/dialog'
import { Input, Label } from 'ui/components/form'
import './edit-data-user.css'

export type EditDataUserModalProps = {
  title: string
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  role: Roles
  user?: User | Patient['emergencyContact']
  description?: string
  children?: React.ReactNode
}

export function EditDataUserModal({
  title,
  handleSubmit,
  role,
  user,
  description,
  children,
}: EditDataUserModalProps) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        {description && <DialogDescription>{description}</DialogDescription>}
      </DialogHeader>
      <form onSubmit={handleSubmit} className="edit-data__form">
        <div className="edit-data__form__item">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Enter the name"
            defaultValue={user?.name || ''}
          />
        </div>
        <div className="edit-data__form__item">
          <Label htmlFor="surname">Surname</Label>
          <Input
            id="surname"
            name="surname"
            type="text"
            required
            placeholder="Enter the surname"
            defaultValue={user?.surname || ''}
          />
        </div>
        <div className="edit-data__form__item">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter the email"
            defaultValue={user?.email || ''}
          />
        </div>
        <div className="edit-data__form__item">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="Enter the phone"
            defaultValue={user?.phone || ''}
          />
        </div>
        <div className="edit-data__form__item">
          <Label htmlFor="age">Age</Label>
          <Input
            id="age"
            name="age"
            type="number"
            min="0"
            required
            placeholder="Enter the age"
            defaultValue={user?.age || ''}
          />
        </div>
        {role === Roles.EMERGENCY_CONTACT && (
          <div className="edit-data__form__item">
            <Label htmlFor="relationship">Relationship</Label>
            <Input
              id="relationship"
              name="relationship"
              type="text"
              required
              placeholder="Enter the relationship"
              defaultValue={
                (user as Patient['emergencyContact'])?.relationship || ''
              }
            />
          </div>
        )}
        {children}
        <DialogFooter className="edit-data__form__footer">
          <DialogClose asChild>
            <button
              type="reset"
              className="edit-data__form__button edit-data__form__button--reset"
            >
              Close
            </button>
          </DialogClose>
          <DialogClose asChild>
            <button
              type="submit"
              className="edit-data__form__button edit-data__form__button--submit"
            >
              Save
            </button>
          </DialogClose>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
