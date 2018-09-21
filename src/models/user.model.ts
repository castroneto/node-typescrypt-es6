import Model from '../knex';
export class UserModel extends Model{

  // define Getter in Setter 
  private nome_usuario: string;
  private email_usuario: string;
  private senha_usuario: string;
  private cargo_usuario: string;
  private fone_usuario: number;
  private email_verificado: boolean;
  private tipo_usuario: number;

    /**
     * Getter $tipo_usuario
     * @return {number}
     */
	public get $tipo_usuario(): number {
		return this.tipo_usuario;
	}
    /**
     * Setter $tipo_usuario
     * @param {number} value
     */
	public set $tipo_usuario(value: number) {
		this.tipo_usuario = value;
	}
    /**
     * Getter $email_verificado
     * @return {boolean}
     */
	public get $email_verificado(): boolean {
		return this.email_verificado;
	}

    /**
     * Setter $email_verificado
     * @param {boolean} value
     */
	public set $email_verificado(value: boolean) {
		this.email_verificado = value;
	}
    /**
     * Getter $nome_usuario
     * @return {string}
     */
	public get $nome_usuario(): string {
		return this.nome_usuario;
	}

    /**
     * Getter $email_usuario
     * @return {string}
     */
	public get $email_usuario(): string {
		return this.email_usuario;
	}

    /**
     * Getter $senha_usuario
     * @return {string}
     */
	public get $senha_usuario(): string {
		return this.senha_usuario;
	}

    /**
     * Getter $cargo_usuario
     * @return {string}
     */
	public get $cargo_usuario(): string {
		return this.cargo_usuario;
	}

    /**
     * Getter $fone_usuario
     * @return {number}
     */
	public get $fone_usuario(): number {
		return this.fone_usuario;
	}

    /**
     * Setter $nome_usuario
     * @param {string} value
     */
	public set $nome_usuario(value: string) {
		this.nome_usuario = value;
	}

    /**
     * Setter $email_usuario
     * @param {string} value
     */
	public set $email_usuario(value: string) {
		this.email_usuario = value;
	}

    /**
     * Setter $senha_usuario
     * @param {string} value
     */
	public set $senha_usuario(value: string) {
		this.senha_usuario = value;
	}

    /**
     * Setter $cargo_usuario
     * @param {string} value
     */
	public set $cargo_usuario(value: string) {
		this.cargo_usuario = value;
	}

    /**
     * Setter $fone_usuario
     * @param {number} value
     */
	public set $fone_usuario(value: number) {
		this.fone_usuario = value;
	}
  
  static get tableName () {
    return 'usuarios'
  }

  static get idColumn() {
    return 'id_usuario';
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['senha_usuario', 'email_usuario'],
    };
  }
}