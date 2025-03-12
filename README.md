How to run

```bash
$ docker run -it --rm -v $PWD:/srv/app -w /srv/app -p 3000:3000 -u node node:22-alpine sh
```