enum UserRole{
    ADMIN = "admin",
    USER = "user"
}

function isAdmin(c: UserRole) {
    if (c === UserRole.ADMIN) {
        return true;
    } else {
        return false;
    }
}
