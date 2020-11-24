USE Grade_A;

CREATE Table users {
  user_name varchar(255),
  credentials varchar(255),
  adress adress,
  email email,
  password password,
  phone phone,
  role_id int ,
  created_at timestamp,
  isDisabled  int,
  isLoggedIn int,
  id int PRIMARY KEY AUTO_INCREMENT,
  FOREIGN KEY (role_id) REFERENCES role(id), 
}

CREATE Table categories {
  id int PRIMARY KEY AUTO_INCREMENT,
  name varchar 
}

CREATE Table courses {
  name varchar,
  price price,
  description varchar,
  img_url varchar,
  created_at timestamp,
  category_id int,
  isDisabled int ,
  id int PRIMARY KEY AUTO_INCREMENT,
  FOREIGN KEY (category_id) REFERENCES category(id)
  FOREIGN KEY (instructor_id) REFERENCES users(id),
}

CREATE Table roles {
  id int PRIMARY KEY AUTO_INCREMENT,
  type varchar
}

CREATE Table videos {
  name varchar,
  vide_url varchar,
  created_at timestamp,
  id int PRIMARY KEY AUTO_INCREMENT,
  FOREIGN KEY (course_id) REFERENCES course(id)
}

CREATE Table rating {
  rating_value int,
  id int PRIMARY KEY AUTO_INCREMENT,
  FOREIGN KEY (student_id) REFERENCES users(id),
  FOREIGN KEY (course_id) REFERENCES course(id),
}

CREATE Table registration {
  id int PRIMARY KEY AUTO_INCREMENT,
  FOREIGN KEY (student_id) REFERENCES users(id),
  FOREIGN KEY (course_id) REFERENCES course(id)
}

