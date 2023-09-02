import os

domain = input("Enter domain name(Default: localhost): ") or "localhost"

mkcert_is_exist = os.system("mkcert -install")

if mkcert_is_exist != 0:
    print("mkcert is not installed. Please install it first.")
    exit()

if domain.startswith("http://"):
    domain = domain[7:]
elif domain.startswith("https://"):
    domain = domain[8:]

gen_cmd = f"mkcert -key-file key.pem -cert-file cert.pem {domain} *.{domain}"
if os.path.exists("cert"):
    os.system("cd cert && " + gen_cmd)
else:
    os.system("mkdir cert && cd cert && " + gen_cmd)

print("Done.")
