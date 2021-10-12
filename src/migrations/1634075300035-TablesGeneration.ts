import { MigrationInterface, QueryRunner } from 'typeorm';

export class TablesGeneration1634075300035 implements MigrationInterface {
  name = 'TablesGeneration1634075300035';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "address" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "zip_code" character varying NOT NULL, "street" character varying NOT NULL, "neighborhood" character varying NOT NULL, "state" character varying NOT NULL, "number" integer NOT NULL, "complement" character varying NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "payment" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "method" character varying NOT NULL, "external_id" character varying NOT NULL, "external_service_name" character varying NOT NULL, "status" character varying NOT NULL DEFAULT 'scheduled', "job_id" integer, CONSTRAINT "REL_0cafe3c9e5f11219ee03a9084b" UNIQUE ("job_id"), CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "rg" character varying NOT NULL, "cpf" character varying NOT NULL, "birthdate" date NOT NULL, "status" character varying NOT NULL DEFAULT 'active', "email" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "IDX_ce0d72875e07836ac661c7c37d" ON "user" ("rg") `,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "IDX_a6235b5ef0939d8deaad755fc8" ON "user" ("cpf") `,
    );
    await queryRunner.query(
      `CREATE TABLE "job" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "price" integer NOT NULL, "currency" character varying NOT NULL DEFAULT 'BRL', "status" character varying NOT NULL DEFAULT 'waiting', "end_user_id" integer, "partner_user_id" integer, "address_id" integer, CONSTRAINT "REL_97232813ef23c4d3c30f946b88" UNIQUE ("end_user_id"), CONSTRAINT "REL_31a380e915a163d824c1fdbd69" UNIQUE ("partner_user_id"), CONSTRAINT "REL_17375bc15326e0dbdce0937fa8" UNIQUE ("address_id"), CONSTRAINT "PK_98ab1c14ff8d1cf80d18703b92f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "partner" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "cnpj" character varying NOT NULL, "status" character varying NOT NULL DEFAULT 'active', CONSTRAINT "PK_8f34ff11ddd5459eacbfacd48ca" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "payment" ADD CONSTRAINT "FK_0cafe3c9e5f11219ee03a9084b8" FOREIGN KEY ("job_id") REFERENCES "job"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "job" ADD CONSTRAINT "FK_97232813ef23c4d3c30f946b885" FOREIGN KEY ("end_user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "job" ADD CONSTRAINT "FK_31a380e915a163d824c1fdbd691" FOREIGN KEY ("partner_user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "job" ADD CONSTRAINT "FK_17375bc15326e0dbdce0937fa88" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "job" DROP CONSTRAINT "FK_17375bc15326e0dbdce0937fa88"`,
    );
    await queryRunner.query(
      `ALTER TABLE "job" DROP CONSTRAINT "FK_31a380e915a163d824c1fdbd691"`,
    );
    await queryRunner.query(
      `ALTER TABLE "job" DROP CONSTRAINT "FK_97232813ef23c4d3c30f946b885"`,
    );
    await queryRunner.query(
      `ALTER TABLE "payment" DROP CONSTRAINT "FK_0cafe3c9e5f11219ee03a9084b8"`,
    );
    await queryRunner.query(`DROP TABLE "partner"`);
    await queryRunner.query(`DROP TABLE "job"`);
    await queryRunner.query(`DROP INDEX "IDX_a6235b5ef0939d8deaad755fc8"`);
    await queryRunner.query(`DROP INDEX "IDX_ce0d72875e07836ac661c7c37d"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "payment"`);
    await queryRunner.query(`DROP TABLE "address"`);
  }
}
