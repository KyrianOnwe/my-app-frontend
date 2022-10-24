# The Flatiron Terrific Todos frontend server app

This app has been created for use with a team where accountability for performance of tasks is crucial.  Adminsistrators and higher can create, reassign, and delete tasks.  Users lower than admninistrator can read others' tasks, read and update their own tasks.  The app keeps track of the current user and automatically inputs that user's id, stamping them as responsible for creation and management of the tasks.
## Requirements:
### Backend:
- Gemfile included, along with enviornment set up files.
- Run `bundle install` to install all dependencies.

### Frontend:
-  Be sure to start the backend server prior to starting the frontend UI to avoid errors.

## How to use:

1.  From a terminal, fork and clone the backend server from [this](https://github.com/KyrianOnwe/phase-3-project) repo.  
2.  Migrate to the directory that stores the cloned backend repo and run `bundle install`
3.  After `bundle install` finishes setting up the dependencies, run `rake server`.
4. Open a new terminal and fork and clone [this](https://github.com/KyrianOnwe/my-app-frontend) repository.
5. From the From the terminal in the cloned directory, run `npm install` or `yarn install`.
6. Once the installations complete, run `npm start`.
7. The browser based user interface will open automatically.

## In the app:
1.  Administrator level users (seeded, prior) can view a list of all tasks assigned to all users in the "Tasks" tab.  
2.  Administrators and higher level users can create and delete tasks for all users in the "Tasks" tab.
3.  Users with credentials lower than Administrator can ONLY view their own tasks and can not update the responsible party or delete the tasks in the "Tasks" tab.
4. All users can access the search page and view the tasks and status of all other users but can not update ANY information while viewing in the "Search" tab. 

## Troubleshooting
If an error occurs while running `rake server`, please run `bundle exec rake server`.  

## References:
- https://linuxhint.com/30_bash_script_examples/
- https://www.cs.colby.edu/maxwell/courses/tutorials/maketutor/
- https://www.rubyguides.com/2019/02/ruby-rake/
- https://www.rubyguides.com/2018/09/rack-middleware/
- https://www.rubyguides.com/
- https://www.seancdavis.com/posts/how-to-write-a-custom-rake-task/



## License & Copyright:
 Copyright 2022 Kyrian Onwe, Flatiron School.  
 
 Licensed under the [MIT LICENSE](LICENSE).
