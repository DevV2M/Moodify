package com.application.moodify.Entity;

import org.jetbrains.annotations.NotNull;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity(name="Users")
public class Users {

    @Id
    @GeneratedValue
    private int id;

    @NotNull
    private String userId;
    private String userName;
    private String name;
    private String profileImage;

    public Users(){
        super();
        // TODO Auto-generate constructor stub;
    }

    public Users(int id, @NotNull String userId, String userName, String name, String profileImage) {
        super();
        this.id = id;
        this.userId = userId;
        this.userName = userName;
        this.name = name;
        this.profileImage = profileImage;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProfileImage() {
        return profileImage;
    }

    public void setProfileImage(String profileImage) {
        this.profileImage = profileImage;
    }
}
