<template>
  <div class="page">
    <div class="grid-container">
      <ListingComponent 
        v-for="container in containers" 
        :key="container.Id"
        :name="container.Names[0]?.replace('/', '')" 
        :state="container.State"
        @click="router.push(`/containers/${container.Id}`)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import ListingComponent from '../../components/ListingComponent.vue';
const router = useRouter()

// this is a json from real docker api (/v1.51/containers/json)
const containers = [
  {
    Id: "546613bfd1b2213a36eefe4f8821e8d6e9a94e99172307ac9f84f6250ebdc116",
    Names: ["/lost-and-found-prod"],
    Image:
      "registry.gitlab.com/personal6534933/lost-and-found-e-day-year-2/lost-and-found-frontend:latest",
    ImageID:
      "sha256:35b7b460e29d67baf742e1b71861797c35ea623856b648aabccde864255a6331",
    ImageManifestDescriptor: {
      mediaType: "application/vnd.oci.image.manifest.v1+json",
      digest:
        "sha256:1af4967cdca61e6a0f2895de6685883931421caf05c3b72940be0b5ae7d20ac9",
      size: 2188,
      platform: {
        architecture: "amd64",
        os: "linux",
      },
    },
    Command: "/docker-entrypoint.sh nginx -g 'daemon off;'",
    Created: 1760165368,
    Ports: [
      {
        IP: "0.0.0.0",
        PrivatePort: 80,
        PublicPort: 80,
        Type: "tcp",
      },
      {
        IP: "::",
        PrivatePort: 80,
        PublicPort: 80,
        Type: "tcp",
      },
    ],
    Labels: {
      "com.docker.compose.config-hash":
        "6ef1664bdd27870cd7cc33c53203af8ad78382cdf213fe26e13345747f542bb8",
      "com.docker.compose.container-number": "1",
      "com.docker.compose.depends_on": "",
      "com.docker.compose.image":
        "sha256:35b7b460e29d67baf742e1b71861797c35ea623856b648aabccde864255a6331",
      "com.docker.compose.oneoff": "False",
      "com.docker.compose.project": "lost-and-found-frontend-v2",
      "com.docker.compose.project.config_files":
        "/home/kanchnak/code/rupp/lost-and-found/lost-and-found-frontend-v2/docker-compose-prod.yml",
      "com.docker.compose.project.working_dir":
        "/home/kanchnak/code/rupp/lost-and-found/lost-and-found-frontend-v2",
      "com.docker.compose.service": "lost-and-found-prod",
      "com.docker.compose.version": "2.39.2",
      "desktop.docker.io/ports.scheme": "v2",
      "desktop.docker.io/ports/80/tcp": ":80",
      "desktop.docker.io/wsl-distro": "Debian",
      maintainer: "NGINX Docker Maintainers <docker-maint@nginx.com>",
    },
    State: "running",
    Status: "Up 3 seconds",
    HostConfig: {
      NetworkMode: "lost-and-found-frontend-v2_default",
    },
    NetworkSettings: {
      Networks: {
        "lost-and-found-frontend-v2_default": {
          IPAMConfig: null,
          Links: null,
          Aliases: null,
          MacAddress: "ce:fe:47:57:61:31",
          DriverOpts: null,
          GwPriority: 0,
          NetworkID:
            "851cbcc57c302dcfa7a596e5b43ba11cfa319dd5055d3306e5f635b8d70aa056",
          EndpointID:
            "2ef9fc17b6e57d3c89903869b7c0e67b4abaef8a7c94c20df26e9c5b07d5d09d",
          Gateway: "172.20.0.1",
          IPAddress: "172.20.0.2",
          IPPrefixLen: 16,
          IPv6Gateway: "",
          GlobalIPv6Address: "",
          GlobalIPv6PrefixLen: 0,
          DNSNames: null,
        },
      },
    },
    Mounts: [],
  },
  {
    Id: "874aa77951e476fc36e7b5ce3af6e06b0ac0fd4521c00423033d52bb3c79e216",
    Names: ["/dichi-system-postgres-1"],
    Image: "postgres:latest",
    ImageID:
      "sha256:29e0bb09c8e7e7fc265ea9f4367de9622e55bae6b0b97e7cce740c2d63c2ebc0",
    ImageManifestDescriptor: {
      mediaType: "application/vnd.oci.image.manifest.v1+json",
      digest:
        "sha256:a064b150a9a994b16df56f4a989c32031128b399eeafd47f572141ee98d0cfe3",
      size: 3626,
      annotations: {
        "com.docker.official-images.bashbrew.arch": "amd64",
        "org.opencontainers.image.base.digest":
          "sha256:f2306da7a8fb6440535937baed0ce0018736742d6dc5beec9d6a31355b259726",
        "org.opencontainers.image.base.name": "debian:trixie-slim",
        "org.opencontainers.image.created": "2025-08-14T18:17:59Z",
        "org.opencontainers.image.revision":
          "e34fc9d23c4eab656e9037701d71962c9b46a2e7",
        "org.opencontainers.image.source":
          "https://github.com/docker-library/postgres.git#e34fc9d23c4eab656e9037701d71962c9b46a2e7:17/trixie",
        "org.opencontainers.image.url": "https://hub.docker.com/_/postgres",
        "org.opencontainers.image.version": "17.6",
      },
      platform: {
        architecture: "amd64",
        os: "linux",
      },
    },
    Command: "docker-entrypoint.sh postgres",
    Created: 1759999906,
    Ports: [
      {
        IP: "0.0.0.0",
        PrivatePort: 5432,
        PublicPort: 5432,
        Type: "tcp",
      },
      {
        IP: "::",
        PrivatePort: 5432,
        PublicPort: 5432,
        Type: "tcp",
      },
    ],
    Labels: {
      "com.docker.compose.config-hash":
        "f2ded35f71f38686fd7bc8abba1fded427c776857b21782b637c2d63ce921ef6",
      "com.docker.compose.container-number": "1",
      "com.docker.compose.depends_on": "",
      "com.docker.compose.image":
        "sha256:29e0bb09c8e7e7fc265ea9f4367de9622e55bae6b0b97e7cce740c2d63c2ebc0",
      "com.docker.compose.oneoff": "False",
      "com.docker.compose.project": "dichi-system",
      "com.docker.compose.project.config_files":
        "/home/kanchnak/code/dichi/dichi-system/docker-compose.yml",
      "com.docker.compose.project.environment_file":
        "/home/kanchnak/code/dichi/dichi-system/envs/.env.local",
      "com.docker.compose.project.working_dir":
        "/home/kanchnak/code/dichi/dichi-system",
      "com.docker.compose.replace": "postgres-1",
      "com.docker.compose.service": "postgres",
      "com.docker.compose.version": "2.39.2",
      "desktop.docker.io/binds/0/Source":
        "/home/kanchnak/code/dichi/dichi-system/data/dichi",
      "desktop.docker.io/binds/0/SourceKind": "wsl2DistroFile",
      "desktop.docker.io/binds/0/Target": "/var/lib/postgresql/data",
      "desktop.docker.io/ports.scheme": "v2",
      "desktop.docker.io/ports/5432/tcp": ":5432",
      "desktop.docker.io/wsl-distro": "Debian",
    },
    State: "running",
    Status: "Up About a minute",
    HostConfig: {
      NetworkMode: "dichi-system_local",
    },
    NetworkSettings: {
      Networks: {
        "dichi-system_local": {
          IPAMConfig: null,
          Links: null,
          Aliases: null,
          MacAddress: "0e:35:e4:54:0c:06",
          DriverOpts: null,
          GwPriority: 0,
          NetworkID:
            "3b2ee1b67256610b7a21e2c50bf851ec9ae722562aaf913aa863d50b04d0e13e",
          EndpointID:
            "2e2a42197015fa5001e972aeb3f8f88a1bdcbd3111b735494db5b6d75b8c3554",
          Gateway: "172.18.0.1",
          IPAddress: "172.18.0.2",
          IPPrefixLen: 16,
          IPv6Gateway: "",
          GlobalIPv6Address: "",
          GlobalIPv6PrefixLen: 0,
          DNSNames: null,
        },
      },
    },
    Mounts: [
      {
        Type: "bind",
        Source:
          "/run/desktop/mnt/host/wsl/docker-desktop-bind-mounts/Debian/5b728b92bc450b79d8dd86c983f09822b701780d585800583f91a3cdc363d342",
        Destination: "/var/lib/postgresql/data",
        Mode: "rw",
        RW: true,
        Propagation: "rprivate",
      },
    ],
  },
];
</script>

<style scoped>
.grid-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
</style>