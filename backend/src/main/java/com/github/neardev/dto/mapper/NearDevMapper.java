package com.github.neardev.dto.mapper;

import com.github.neardev.dto.NearDevDTO;
import com.github.neardev.entity.NearDevEntity;
import org.springframework.context.annotation.Configuration;

@Configuration
public class NearDevMapper {

    public NearDevDTO toDto(NearDevEntity nearDevEntity) {
        NearDevDTO nearDevDTO = new NearDevDTO();
        nearDevDTO.setId(nearDevEntity.getId());
        nearDevDTO.setName(nearDevEntity.getName());
        nearDevDTO.setBio(nearDevEntity.getBio());
        nearDevDTO.setTechs(nearDevEntity.getTechs());
        nearDevDTO.setAvatarUrl(nearDevEntity.getAvatarUrl());
        nearDevDTO.setLogin(nearDevEntity.getLogin());
        return nearDevDTO;
    }

    public NearDevEntity toEntity (NearDevDTO nearDevDTO) {
        NearDevEntity entity = new NearDevEntity();
        entity.setId(nearDevDTO.getId());
        entity.setName(nearDevDTO.getName());
        entity.setBio(nearDevDTO.getBio());
        entity.setTechs(nearDevDTO.getTechs());
        entity.setAvatarUrl(nearDevDTO.getAvatarUrl());
        entity.setLogin(nearDevDTO.getLogin());
        return entity;
    }
}
