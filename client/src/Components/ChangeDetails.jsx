import React from 'react'

export default function ChangeDetails() {
  return (
    <div>
      <form>

        Edit profile
        <input
          type="text"
          name="firstName"

          placeholder="your first name"
          className="form-control"

          required
        />
        <input
          type="text"
          name="lastName"

          placeholder="your last name"
          className="form-control"

          required
        />

        <input
          type="text"
          name="username"

          placeholder="your username"
          className="form-control"

          required
        />

        <input
          type="password"
          name="password"

          placeholder="New password"
          className="form-control"

          required
        />

        <input
          type="password"
          name="confirmPassword"

          placeholder="Please confirm your password"
          className="form-control"

          required
        />

        <button type="submit" className="btn btn-primary btn-sm">
          Submit
                    </button>
      </form>

    </div>
  )
}
