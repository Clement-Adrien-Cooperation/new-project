export class User {
  constructor(
    public readonly username: string,
    public readonly email: string,
    public readonly avatarUrl?: string,
    public readonly bio?: string
  ) {}

  updateProfile(data: { username?: string; bio?: string; avatarUrl?: string }) {
    return new User(
      data.username ?? this.username,
      this.email,
      data.avatarUrl ?? this.avatarUrl,
      data.bio ?? this.bio
    )
  }
}
