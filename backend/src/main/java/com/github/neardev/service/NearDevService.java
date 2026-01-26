package com.github.neardev.service;

import com.github.neardev.dto.NearDevDTO;
import com.github.neardev.dto.mapper.NearDevMapper;
import com.github.neardev.entity.NearDevEntity;
import com.github.neardev.exceptions.DevNotFoundException;
import com.github.neardev.repository.NearDevRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class NearDevService {

    @Autowired
    private NearDevRepository nearDevRepository;

    @Autowired
    private NearDevMapper nearDevMapper;

    public NearDevDTO store(NearDevDTO devDTO) {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<NearDevDTO> resp = restTemplate.getForEntity("https://api.github.com/users/" + devDTO.getLogin(), NearDevDTO.class);
        NearDevDTO respBody = resp.getBody();

        devDTO.setName(respBody.getName());
        devDTO.setBio(respBody.getBio());
        devDTO.setAvatarUrl(respBody.getAvatarUrl());
        devDTO.setLogin(respBody.getLogin());

        //mapper
        NearDevEntity toEntity = nearDevMapper.toEntity(devDTO);
        nearDevRepository.save(toEntity);

        return nearDevMapper.toDto(toEntity);
    }

    public List<NearDevDTO> indexAllDevs() {
        List<NearDevEntity> list = nearDevRepository.findAll();
        List<NearDevDTO> listDto = list
                .stream()
                .map(m -> nearDevMapper.toDto(m))
                .toList();

        if(listDto.isEmpty()) {
            throw new DevNotFoundException();
        }

        return listDto;
    }

    public void delete(Long id) {
        NearDevEntity dev = nearDevRepository.findById(id)
                .orElseThrow(DevNotFoundException::new);
        nearDevRepository.delete(dev);
    }
}
