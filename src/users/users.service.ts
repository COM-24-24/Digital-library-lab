import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [ 
        { id: 1, name: 'Alice Banda',  email: 'alice@library.com',  role: 'admin'  }, 
        { id: 2, name: 'Bob Phiri',  email: 'bob@library.com',    role: 'member' }, 
        { id: 3, name: 'Carol Tembo',  email: 'carol@library.com',  role: 'member' }, 
        { id: 4, name: 'David Mwale',  email: 'david@library.com',  role: 'admin'  }, 
    ];

    getUsers(): any[] {
        return this.users;
    }

    getUserById(id: number): any {
        return this.users.find((user) => user.id === id);
    }

    getUsersByRole(role: string): any[] {
        return this.users.filter((user) => user.role === role);
    }
}
