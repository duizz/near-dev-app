package com.github.neardev.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class NearDevDTO {

    private Long id;
    private String name;
    private String login;
    @JsonProperty("avatar_url")
    private String avatarUrl;
    private String bio;

    private List<String> techs;

    public NearDevDTO() {
    }

    public NearDevDTO(Long id, String name, String login, String avatarUrl, String bio, List<String> techs) {
        this.id = id;
        this.name = name;
        this.login = login;
        this.avatarUrl = avatarUrl;
        this.bio = bio;
        this.techs = techs;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getAvatarUrl() {
        return avatarUrl;
    }

    public void setAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public List<String> getTechs() {
        return techs;
    }

    public void setTechs(List<String> techs) {
        this.techs = techs;
    }
}
